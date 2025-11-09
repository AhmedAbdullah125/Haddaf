import React, { createContext, useContext, useState, useEffect } from "react";

interface MemberContextType {
  isAcademyMember: boolean;
  setIsAcademyMember: (value: boolean) => void;
  memberData: any | null;
  setMemberData: (data: any) => void;
}

const MemberContext = createContext<MemberContextType | undefined>(undefined);

export const MemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAcademyMember, setIsAcademyMember] = useState(() => {
    return localStorage.getItem("isAcademyMember") === "true";
  });
  
  const [memberData, setMemberData] = useState(() => {
    const stored = localStorage.getItem("memberData");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem("isAcademyMember", String(isAcademyMember));
  }, [isAcademyMember]);

  useEffect(() => {
    if (memberData) {
      localStorage.setItem("memberData", JSON.stringify(memberData));
    } else {
      localStorage.removeItem("memberData");
    }
  }, [memberData]);

  return (
    <MemberContext.Provider value={{ isAcademyMember, setIsAcademyMember, memberData, setMemberData }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error("useMember must be used within MemberProvider");
  }
  return context;
};
