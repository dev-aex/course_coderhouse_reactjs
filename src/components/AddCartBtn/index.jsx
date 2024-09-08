const AddCartBtn = () => {
  return (
    <button className="w-[10rem] h-[16rem} p-[0.8rem] flex justify-center text-white rounded-xl items-center gap-3xs bg-ferre_blue300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
      >
        <path
          d="M3.77257 12.1712C3.45527 12.1712 3.18373 12.0582 2.95796 11.8323C2.73219 11.6063 2.61911 11.3343 2.61873 11.0163C2.61834 10.6983 2.73142 10.4265 2.95796 10.2009C3.1845 9.97534 3.45603 9.86216 3.77257 9.86139C4.08911 9.86062 4.36084 9.9738 4.58777 10.2009C4.81469 10.4281 4.92757 10.6999 4.92642 11.0163C4.92527 11.3328 4.81238 11.6047 4.58777 11.8323C4.36315 12.0598 4.09142 12.1728 3.77257 12.1712ZM9.5418 12.1712C9.2245 12.1712 8.95296 12.0582 8.72719 11.8323C8.50142 11.6063 8.38834 11.3343 8.38796 11.0163C8.38757 10.6983 8.50065 10.4265 8.72719 10.2009C8.95373 9.97534 9.22526 9.86216 9.5418 9.86139C9.85834 9.86062 10.1301 9.9738 10.357 10.2009C10.5839 10.4281 10.6968 10.6999 10.6956 11.0163C10.6945 11.3328 10.5816 11.6047 10.357 11.8323C10.1324 12.0598 9.86065 12.1728 9.5418 12.1712ZM2.73411 1.77699H11.2437C11.4649 1.77699 11.6331 1.87573 11.7485 2.07322C11.8639 2.27071 11.8687 2.47032 11.763 2.67204L9.71488 6.36777C9.60911 6.56026 9.46738 6.70943 9.28969 6.8153C9.112 6.92117 8.91719 6.9741 8.70527 6.9741H4.40719L3.77257 8.12902H10.6956V9.28393H3.77257C3.33988 9.28393 3.01296 9.09395 2.7918 8.71398C2.57065 8.33402 2.56103 7.95617 2.76296 7.58043L3.5418 6.16566L1.46488 1.77699H0.311035V0.62207H2.18603L2.73411 1.77699Z"
          fill="#F6F6F7"
        />
      </svg>
      <span>Agregar</span>
    </button>
  );
};

export default AddCartBtn;
