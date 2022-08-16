import { useToastStateContext } from "./toast-provider";
import Toast from "./toast";

export default function ToastContainer() {
  const { toasts } = useToastStateContext();

  return (
    <div className="fixed top-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-xl">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}
