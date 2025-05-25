import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/store/auth";

export const AdminGuard = ({ children }: { children: React.ReactNode }) => {
	const { user, isAuthenticated, checkIsAuthenticated, isLoading } =
		useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		checkIsAuthenticated();
	}, [checkIsAuthenticated]);

	useEffect(() => {
		if (!isLoading && (!isAuthenticated || user?.role !== "admin")) {
			navigate("/admin/login");
		}
	}, [isLoading, isAuthenticated, user, navigate]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	if (!isAuthenticated || user?.role !== "admin") {
		return null;
	}

	return <>{children}</>;
};
