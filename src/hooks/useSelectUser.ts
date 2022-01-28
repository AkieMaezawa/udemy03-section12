import { useCallback, useState } from "react";

import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザ情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    // ↓targetUserがundifindならnullを返す
    // setSelectedUser(targetUser ?? null);
    // ↓targetUserは絶対にundifindにならない場合
    setSelectedUser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
