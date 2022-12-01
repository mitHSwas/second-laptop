import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default useBuyer;