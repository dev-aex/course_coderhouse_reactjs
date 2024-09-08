const FooterBar = () => {
  return (
    <section className="absolute mt-xl bottom-0 w-screen h-[147px] px-[138px] flex flex-col py-md bg-primario-300">
      <section className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h2>
            <svg
              className="hover:cursor-pointer"
              width="112"
              height="31"
              viewBox="0 0 112 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.56 24.5V12.34H0.48V8.5H2.56V2.1H11.68V5.94H7.04V8.5H10.72V12.34H7.04V24.5H2.56ZM21.1313 24.98C16.1713 24.98 12.3313 21.14 12.3313 16.34C12.3313 11.54 16.1713 7.7 21.1313 7.7C26.2513 7.7 29.7713 11.572 29.7713 16.34V17.3H16.9713C17.2913 19.38 19.0513 21.14 21.1313 21.14C24.0113 21.14 24.8113 19.22 24.8113 19.22H29.6112C29.6112 19.22 28.1713 24.98 21.1313 24.98ZM17.1313 14.58H24.9713C24.6513 12.98 23.2113 11.54 21.1313 11.54C19.0513 11.54 17.6113 12.98 17.1313 14.58ZM32.4788 24.5V8.18H36.9588V10.58H37.1188C37.1188 10.58 38.0788 7.86 41.2788 7.86H43.1988V12.18H40.7988C38.3988 12.18 36.9588 13.62 36.9588 15.86V24.5H32.4788ZM45.4475 24.5V8.18H49.9275V10.58H50.0875C50.0875 10.58 51.0475 7.86 54.2475 7.86H56.1675V12.18H53.7675C51.3675 12.18 49.9275 13.62 49.9275 15.86V24.5H45.4475ZM66.2563 24.98C61.2963 24.98 57.4563 21.14 57.4563 16.34C57.4563 11.54 61.2963 7.7 66.2563 7.7C71.3763 7.7 74.8963 11.572 74.8963 16.34V17.3H62.0963C62.4163 19.38 64.1763 21.14 66.2563 21.14C69.1363 21.14 69.9363 19.22 69.9363 19.22H74.7362C74.7362 19.22 73.2963 24.98 66.2563 24.98ZM62.2563 14.58H70.0963C69.7763 12.98 68.3363 11.54 66.2563 11.54C64.1763 11.54 62.7363 12.98 62.2563 14.58ZM82.2438 30.58L84.0038 24.5H80.4838L76.1638 8.18H80.8038L84.0038 20.66H85.2838L88.8038 8.18H93.4438L86.8838 30.58H82.2438ZM101.918 24.98C97.7575 24.98 94.3975 21.62 94.3975 16.34C94.3975 11.06 97.7575 7.7 101.918 7.7C105.438 7.7 107.038 10.26 107.038 10.26H107.198V8.18H111.678V24.5H107.198V22.42H107.038C107.038 22.42 105.438 24.98 101.918 24.98ZM103.038 21.14C105.438 21.14 107.198 19.38 107.198 16.34C107.198 13.3 105.438 11.54 103.038 11.54C100.798 11.54 99.0375 13.3 99.0375 16.34C99.0375 19.38 100.798 21.14 103.038 21.14ZM101.918 4.82L104.318 0.0199986H109.118V0.0519981L105.278 4.82H101.918Z"
                fill="#5266A8"
              />
            </svg>
          </h2>
        </div>
        {/* Links */}
        <div>
          <ul className="flex gap-sm flex-wrap text-primario-20 text-sm font-normal">
            <li className="hover:underline hover:cursor-pointer">
              Construcción
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Herramientas
            </li>
            <li className="hover:underline hover:cursor-pointer">Herrería</li>
            <li className="hover:underline hover:cursor-pointer">Plomería</li>
            <li className="hover:underline hover:cursor-pointer">Pintura</li>
          </ul>
        </div>
        {/* Contacto */}
        <section className="flex flex-col gap-xs">
          <section className="flex flex-col gap-3xs">
            <div className="flex gap-xs items-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3 12.5C9.91111 12.5 8.53889 12.1973 7.18333 11.592C5.82778 10.9867 4.59444 10.1282 3.48333 9.01667C2.37222 7.90511 1.514 6.67178 0.908667 5.31667C0.303333 3.96156 0.000444444 2.58933 0 1.2C0 1 0.0666666 0.833333 0.2 0.7C0.333333 0.566667 0.5 0.5 0.7 0.5H3.4C3.55556 0.5 3.69444 0.552889 3.81667 0.658667C3.93889 0.764444 4.01111 0.889333 4.03333 1.03333L4.46667 3.36667C4.48889 3.54444 4.48333 3.69444 4.45 3.81667C4.41667 3.93889 4.35556 4.04444 4.26667 4.13333L2.65 5.76667C2.87222 6.17778 3.136 6.57489 3.44133 6.958C3.74667 7.34111 4.08289 7.71067 4.45 8.06667C4.79444 8.41111 5.15556 8.73067 5.53333 9.02533C5.91111 9.32 6.31111 9.58933 6.73333 9.83333L8.3 8.26667C8.4 8.16667 8.53067 8.09178 8.692 8.042C8.85333 7.99222 9.01156 7.97822 9.16667 8L11.4667 8.46667C11.6222 8.51111 11.75 8.59178 11.85 8.70867C11.95 8.82556 12 8.956 12 9.1V11.8C12 12 11.9333 12.1667 11.8 12.3C11.6667 12.4333 11.5 12.5 11.3 12.5Z"
                  fill="#CED7F4"
                />
              </svg>
              <p className="text-primario-20 text-sm">809-555-5555</p>
            </div>
            <div className="flex gap-xs items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
              >
                <path
                  d="M1.66667 10.8333C1.3 10.8333 0.986225 10.7028 0.725336 10.442C0.464447 10.1811 0.33378 9.86707 0.333336 9.49996V1.49996C0.333336 1.13329 0.464003 0.819515 0.725336 0.558626C0.986669 0.297737 1.30045 0.16707 1.66667 0.166626H12.3333C12.7 0.166626 13.014 0.297293 13.2753 0.558626C13.5367 0.819959 13.6671 1.13374 13.6667 1.49996V9.49996C13.6667 9.86663 13.5362 10.1806 13.2753 10.442C13.0144 10.7033 12.7004 10.8337 12.3333 10.8333H1.66667ZM7 6.16663L1.66667 2.83329V9.49996H12.3333V2.83329L7 6.16663ZM7 4.83329L12.3333 1.49996H1.66667L7 4.83329ZM1.66667 2.83329V1.49996V9.49996V2.83329Z"
                  fill="#CED7F4"
                />
              </svg>
              <p className="text-primario-20 text-sm">contacto@ferreya.com</p>
            </div>
          </section>

          <div className="flex gap-xs">
            <svg
              className="hover:opacity-70 hover:cursor-pointer"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.8 0.5H14.2C17.4 0.5 20 3.1 20 6.3V14.7C20 16.2383 19.3889 17.7135 18.3012 18.8012C17.2135 19.8889 15.7383 20.5 14.2 20.5H5.8C2.6 20.5 0 17.9 0 14.7V6.3C0 4.76174 0.61107 3.28649 1.69878 2.19878C2.78649 1.11107 4.26174 0.5 5.8 0.5ZM5.6 2.5C4.64522 2.5 3.72955 2.87928 3.05442 3.55442C2.37928 4.22955 2 5.14522 2 6.1V14.9C2 16.89 3.61 18.5 5.6 18.5H14.4C15.3548 18.5 16.2705 18.1207 16.9456 17.4456C17.6207 16.7705 18 15.8548 18 14.9V6.1C18 4.11 16.39 2.5 14.4 2.5H5.6ZM15.25 4C15.5815 4 15.8995 4.1317 16.1339 4.36612C16.3683 4.60054 16.5 4.91848 16.5 5.25C16.5 5.58152 16.3683 5.89946 16.1339 6.13388C15.8995 6.3683 15.5815 6.5 15.25 6.5C14.9185 6.5 14.6005 6.3683 14.3661 6.13388C14.1317 5.89946 14 5.58152 14 5.25C14 4.91848 14.1317 4.60054 14.3661 4.36612C14.6005 4.1317 14.9185 4 15.25 4ZM10 5.5C11.3261 5.5 12.5979 6.02678 13.5355 6.96447C14.4732 7.90215 15 9.17392 15 10.5C15 11.8261 14.4732 13.0979 13.5355 14.0355C12.5979 14.9732 11.3261 15.5 10 15.5C8.67392 15.5 7.40215 14.9732 6.46447 14.0355C5.52678 13.0979 5 11.8261 5 10.5C5 9.17392 5.52678 7.90215 6.46447 6.96447C7.40215 6.02678 8.67392 5.5 10 5.5ZM10 7.5C9.20435 7.5 8.44129 7.81607 7.87868 8.37868C7.31607 8.94129 7 9.70435 7 10.5C7 11.2956 7.31607 12.0587 7.87868 12.6213C8.44129 13.1839 9.20435 13.5 10 13.5C10.7956 13.5 11.5587 13.1839 12.1213 12.6213C12.6839 12.0587 13 11.2956 13 10.5C13 9.70435 12.6839 8.94129 12.1213 8.37868C11.5587 7.81607 10.7956 7.5 10 7.5Z"
                fill="#CED7F4"
              />
            </svg>
            <svg
              className="hover:opacity-70 hover:cursor-pointer"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5625 0.875C1.98375 0.879575 1.43001 1.11151 1.02076 1.52076C0.611513 1.93001 0.379575 2.48375 0.375 3.0625V17.9375C0.375 19.1336 1.36638 20.125 2.5625 20.125H17.4375C18.6336 20.125 19.625 19.1336 19.625 17.9375V3.0625C19.625 1.86638 18.6336 0.875 17.4375 0.875H2.5625ZM2.5625 2.625H17.4375C17.6869 2.625 17.875 2.81313 17.875 3.0625V17.9375C17.8762 17.9953 17.8657 18.0527 17.8441 18.1063C17.8226 18.1599 17.7904 18.2086 17.7495 18.2495C17.7086 18.2904 17.6599 18.3226 17.6063 18.3441C17.5527 18.3657 17.4953 18.3762 17.4375 18.375H2.5625C2.50472 18.3762 2.44729 18.3657 2.39368 18.3441C2.34006 18.3226 2.29135 18.2904 2.25049 18.2495C2.20962 18.2086 2.17744 18.1599 2.15587 18.1063C2.13431 18.0527 2.12381 17.9953 2.125 17.9375V3.0625C2.125 2.81313 2.31313 2.625 2.5625 2.625ZM5.13325 4.12912C4.93273 4.12429 4.73327 4.1596 4.5466 4.233C4.35993 4.30639 4.18983 4.41638 4.0463 4.55649C3.90277 4.6966 3.78871 4.864 3.71084 5.04884C3.63297 5.23368 3.59285 5.43223 3.59285 5.63281C3.59285 5.83339 3.63297 6.03194 3.71084 6.21679C3.78871 6.40163 3.90277 6.56903 4.0463 6.70914C4.18983 6.84925 4.35993 6.95923 4.5466 7.03263C4.73327 7.10602 4.93273 7.14134 5.13325 7.1365C5.52577 7.12703 5.89903 6.96445 6.1733 6.68349C6.44757 6.40252 6.6011 6.02545 6.6011 5.63281C6.6011 5.24018 6.44757 4.8631 6.1733 4.58214C5.89903 4.30118 5.52577 4.13859 5.13325 4.12912ZM13.0345 8.12088C11.7806 8.12088 10.9467 8.80775 10.602 9.4605H10.5469V8.3125H8.0855V16.625H10.6562V12.523C10.6562 11.4398 10.8715 10.3906 12.2146 10.3906C13.5376 10.3906 13.5551 11.6139 13.5551 12.5781V16.625H16.125V12.0584C16.125 9.82363 15.649 8.12088 13.0345 8.12088ZM3.875 8.3125V16.625H6.47287V8.3125H3.875Z"
                fill="#CED7F4"
              />
            </svg>
            <svg
              className="hover:opacity-70 hover:cursor-pointer"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 10.5C2.00014 8.96045 2.44451 7.45364 3.27979 6.16038C4.11506 4.86712 5.30576 3.84234 6.70901 3.20901C8.11225 2.57568 9.66844 2.3607 11.1908 2.58987C12.7132 2.81904 14.1372 3.48262 15.2918 4.50099C16.4464 5.51936 17.2826 6.84926 17.7002 8.33111C18.1177 9.81296 18.0988 11.3838 17.6457 12.8552C17.1926 14.3265 16.3246 15.6359 15.1458 16.6262C13.967 17.6165 12.5275 18.2456 11 18.438V12.5H13C13.2652 12.5 13.5196 12.3946 13.7071 12.2071C13.8946 12.0196 14 11.7652 14 11.5C14 11.2348 13.8946 10.9804 13.7071 10.7929C13.5196 10.6054 13.2652 10.5 13 10.5H11V8.5C11 8.23478 11.1054 7.98043 11.2929 7.79289C11.4804 7.60536 11.7348 7.5 12 7.5H12.5C12.7652 7.5 13.0196 7.39464 13.2071 7.20711C13.3946 7.01957 13.5 6.76522 13.5 6.5C13.5 6.23478 13.3946 5.98043 13.2071 5.79289C13.0196 5.60536 12.7652 5.5 12.5 5.5H12C11.2044 5.5 10.4413 5.81607 9.87868 6.37868C9.31607 6.94129 9 7.70435 9 8.5V10.5H7C6.73478 10.5 6.48043 10.6054 6.29289 10.7929C6.10536 10.9804 6 11.2348 6 11.5C6 11.7652 6.10536 12.0196 6.29289 12.2071C6.48043 12.3946 6.73478 12.5 7 12.5H9V18.438C7.06661 18.1944 5.28861 17.2535 3.99975 15.792C2.7109 14.3304 1.99982 12.4487 2 10.5ZM10 20.5C15.523 20.5 20 16.023 20 10.5C20 4.977 15.523 0.5 10 0.5C4.477 0.5 0 4.977 0 10.5C0 16.023 4.477 20.5 10 20.5Z"
                fill="#CED7F4"
              />
            </svg>
          </div>
        </section>
      </section>
      {/* Crédito */}
      <section>
        <p className="text-xs text-primario-20 font-light">
          © 2024 AEX. Todos los derechos reservados.
        </p>
      </section>
    </section>
  );
};

export default FooterBar;
