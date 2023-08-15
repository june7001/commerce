export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 251 28"
      width="251"
      height="28"
      {...props}
    >
      <path
        fill={props.fill}
        className={props.className}
        d="M0.268 27C0.268 26.568 0.316 26.244 0.412 26.028C0.508 25.788 0.652 25.632 0.844 25.56L3.292 24.876L2.716 25.488V5.508L3.328 6.156L0.268 5.436C0.268 5.076 0.316 4.788 0.412 4.572C0.508 4.332 0.688 4.116 0.952 3.924H10.348C12.484 3.924 14.152 4.368 15.352 5.256C16.576 6.144 17.188 7.356 17.188 8.892C17.188 9.852 16.948 10.74 16.468 11.556C16.012 12.348 15.364 12.996 14.524 13.5C13.684 14.004 12.736 14.316 11.68 14.436L11.752 14.148C12.976 14.22 14.068 14.544 15.028 15.12C15.988 15.672 16.744 16.392 17.296 17.28C17.872 18.144 18.16 19.116 18.16 20.196C18.16 21.564 17.836 22.764 17.188 23.796C16.564 24.804 15.664 25.596 14.488 26.172C13.336 26.724 11.98 27 10.42 27H0.268ZM9.772 25.2C11.308 25.2 12.484 24.792 13.3 23.976C14.116 23.16 14.524 21.984 14.524 20.448C14.524 18.768 14.08 17.508 13.192 16.668C12.304 15.804 11.008 15.372 9.304 15.372H5.812L6.172 15.048V24.948L5.812 24.48C6.34 24.696 6.964 24.876 7.684 25.02C8.428 25.14 9.124 25.2 9.772 25.2ZM6.172 13.896L5.668 13.284C5.788 13.356 6.04 13.416 6.424 13.464C6.832 13.488 7.288 13.512 7.792 13.536C8.32 13.56 8.812 13.572 9.268 13.572C10.684 13.572 11.776 13.236 12.544 12.564C13.336 11.892 13.732 10.92 13.732 9.648C13.732 8.376 13.336 7.404 12.544 6.732C11.776 6.06 10.66 5.724 9.196 5.724C8.644 5.724 8.08 5.772 7.504 5.868C6.952 5.94 6.388 6.072 5.812 6.264L6.172 5.94V13.896ZM21.7625 27C21.7625 26.544 21.8105 26.208 21.9065 25.992C22.0025 25.776 22.1465 25.632 22.3385 25.56L24.5345 24.84L24.1385 25.344V2.304L24.5705 2.844L22.3385 2.412C21.9545 2.34 21.7625 1.872 21.7625 1.008C22.6025 0.887998 23.3345 0.791998 23.9585 0.719999C24.5825 0.623999 25.1945 0.575999 25.7945 0.575999C26.9705 0.575999 27.5585 1.296 27.5585 2.736V25.272L27.1265 24.768L30.0785 25.488C30.0785 25.872 30.0305 26.172 29.9345 26.388C29.8625 26.58 29.6945 26.784 29.4305 27H21.7625ZM39.969 27.432C37.665 27.432 35.853 26.736 34.533 25.344C33.213 23.952 32.553 22.092 32.553 19.764C32.553 17.94 32.937 16.332 33.705 14.94C34.473 13.524 35.529 12.408 36.873 11.592C38.217 10.776 39.765 10.368 41.517 10.368C43.053 10.368 44.373 10.692 45.477 11.34C46.605 11.964 47.469 12.864 48.069 14.04C48.693 15.192 49.005 16.548 49.005 18.108C49.005 19.932 48.621 21.54 47.853 22.932C47.085 24.324 46.017 25.428 44.649 26.244C43.305 27.036 41.745 27.432 39.969 27.432ZM40.689 26.064C42.201 26.064 43.365 25.44 44.181 24.192C44.997 22.92 45.405 21.156 45.405 18.9C45.405 16.596 45.021 14.832 44.253 13.608C43.485 12.36 42.357 11.736 40.869 11.736C39.381 11.736 38.217 12.36 37.377 13.608C36.561 14.856 36.153 16.632 36.153 18.936C36.153 21.24 36.537 23.004 37.305 24.228C38.097 25.452 39.225 26.064 40.689 26.064ZM52.0045 27C52.0045 26.136 52.1965 25.656 52.5805 25.56L54.6325 24.84L54.2365 25.344V12.492L54.6685 13.032L52.5805 12.6C52.1965 12.528 52.0045 12.06 52.0045 11.196C52.9885 11.028 53.7325 10.92 54.2365 10.872C54.7645 10.8 55.1965 10.764 55.5325 10.764C56.2285 10.764 56.7205 10.932 57.0085 11.268C57.2965 11.58 57.4405 12.096 57.4405 12.816V14.004L57.2965 13.932H57.6565C58.5925 12.828 59.6605 11.964 60.8605 11.34C62.0605 10.692 63.2125 10.368 64.3165 10.368C65.6605 10.368 66.6565 10.848 67.3045 11.808C67.9525 12.744 68.2765 14.184 68.2765 16.128V25.416L67.8445 24.912L70.2205 25.488C70.2205 25.872 70.1725 26.172 70.0765 26.388C69.9805 26.58 69.8125 26.784 69.5725 27H62.9485C62.9485 26.136 63.1405 25.656 63.5245 25.56L65.2525 24.984L64.8565 25.524V16.308C64.8565 13.908 64.0165 12.708 62.3365 12.708C61.6885 12.708 61.0405 12.852 60.3925 13.14C59.7685 13.404 59.1925 13.752 58.6645 14.184C58.1365 14.616 57.7045 15.084 57.3685 15.588L57.6565 14.904V25.416L57.2245 24.912L59.6005 25.488C59.6005 25.872 59.5525 26.172 59.4565 26.388C59.3605 26.58 59.1805 26.784 58.9165 27H52.0045ZM73.5685 27C73.5685 26.136 73.7605 25.656 74.1445 25.56L75.8725 24.984L75.4765 25.524V16.308C75.4765 13.908 74.6365 12.708 72.9565 12.708C72.0205 12.708 71.1085 12.996 70.2205 13.572C69.3325 14.124 68.6125 14.772 68.0605 15.516L67.6645 13.932H68.2045C69.1645 12.828 70.2445 11.964 71.4445 11.34C72.6445 10.692 73.7965 10.368 74.9005 10.368C76.2685 10.368 77.2765 10.848 77.9245 11.808C78.5725 12.744 78.8965 14.184 78.8965 16.128V25.272L78.4645 24.768L81.1285 25.488C81.1285 25.872 81.0805 26.172 80.9845 26.388C80.8885 26.58 80.7205 26.784 80.4805 27H73.5685ZM89.6855 27.432C87.8855 27.432 86.4095 27.06 85.2575 26.316C84.1055 25.548 83.5295 24.636 83.5295 23.58C83.5295 23.004 83.6855 22.572 83.9975 22.284C84.3335 21.996 84.7415 21.852 85.2215 21.852C85.8215 21.852 86.3015 22.044 86.6615 22.428C86.6615 23.676 86.9375 24.624 87.4895 25.272C88.0415 25.896 88.8695 26.208 89.9735 26.208C90.9815 26.208 91.7735 25.968 92.3495 25.488C92.9255 24.984 93.2135 24.276 93.2135 23.364C93.2135 22.668 93.0215 22.104 92.6375 21.672C92.2775 21.24 91.7855 20.892 91.1615 20.628C90.5615 20.34 89.9135 20.064 89.2175 19.8C88.4255 19.512 87.6455 19.176 86.8775 18.792C86.1095 18.408 85.4735 17.904 84.9695 17.28C84.4895 16.656 84.2495 15.864 84.2495 14.904C84.2495 13.536 84.7895 12.444 85.8695 11.628C86.9735 10.788 88.4615 10.368 90.3335 10.368C91.3895 10.368 92.3375 10.5 93.1775 10.764C94.0175 11.028 94.6775 11.4 95.1575 11.88C95.6615 12.36 95.9135 12.912 95.9135 13.536C95.9135 14.016 95.7455 14.4 95.4095 14.688C95.0975 14.952 94.7015 15.084 94.2215 15.084C93.7895 15.084 93.3815 14.94 92.9975 14.652C92.9975 13.668 92.7335 12.912 92.2055 12.384C91.6775 11.856 90.9455 11.592 90.0095 11.592C89.1695 11.592 88.4975 11.796 87.9935 12.204C87.5135 12.612 87.2735 13.164 87.2735 13.86C87.2735 14.46 87.4415 14.952 87.7775 15.336C88.1375 15.696 88.5935 16.008 89.1455 16.272C89.7215 16.536 90.3335 16.788 90.9815 17.028C91.8215 17.34 92.6615 17.7 93.5015 18.108C94.3415 18.516 95.0375 19.044 95.5895 19.692C96.1655 20.34 96.4535 21.204 96.4535 22.284C96.4535 23.34 96.1655 24.252 95.5895 25.02C95.0375 25.788 94.2455 26.388 93.2135 26.82C92.2055 27.228 91.0295 27.432 89.6855 27.432ZM104.652 27.432C103.428 27.432 102.516 27.048 101.916 26.28C101.316 25.512 101.016 24.372 101.016 22.86V7.776C101.28 7.56 101.592 7.368 101.952 7.2C102.336 7.032 102.744 6.888 103.176 6.768C103.608 6.624 104.028 6.54 104.436 6.516V22.356C104.436 23.292 104.568 23.976 104.832 24.408C105.12 24.84 105.612 25.056 106.308 25.056C106.836 25.056 107.4 24.948 108 24.732C108.624 24.492 109.212 24.132 109.764 23.652L110.34 24.66C110.076 25.02 109.644 25.428 109.044 25.884C108.468 26.316 107.796 26.688 107.028 27C106.284 27.288 105.492 27.432 104.652 27.432ZM108.756 12.96L98.604 12.744C98.604 12.384 98.652 12.048 98.748 11.736C98.844 11.4 98.976 11.172 99.144 11.052L109.476 10.62C109.524 10.74 109.56 10.86 109.584 10.98C109.632 11.1 109.656 11.22 109.656 11.34C109.656 11.772 109.572 12.132 109.404 12.42C109.26 12.708 109.044 12.888 108.756 12.96ZM118.756 27.432C117.244 27.432 115.924 27.108 114.796 26.46C113.692 25.788 112.828 24.864 112.204 23.688C111.58 22.488 111.268 21.12 111.268 19.584C111.268 17.832 111.64 16.26 112.384 14.868C113.128 13.476 114.124 12.384 115.372 11.592C116.62 10.776 117.988 10.368 119.476 10.368C120.772 10.368 121.888 10.656 122.824 11.232C123.784 11.808 124.528 12.612 125.056 13.644C125.608 14.652 125.884 15.828 125.884 17.172C125.884 17.652 125.8 17.976 125.632 18.144C125.464 18.312 125.248 18.396 124.984 18.396H113.68V17.1L123.112 16.884L122.716 17.316C122.764 16.164 122.632 15.18 122.32 14.364C122.032 13.524 121.612 12.876 121.06 12.42C120.508 11.964 119.86 11.736 119.116 11.736C117.868 11.736 116.848 12.324 116.056 13.5C115.288 14.676 114.904 16.332 114.904 18.468C114.904 19.908 115.108 21.156 115.516 22.212C115.948 23.268 116.56 24.084 117.352 24.66C118.168 25.236 119.152 25.524 120.304 25.524C121.24 25.524 122.14 25.296 123.004 24.84C123.868 24.384 124.648 23.736 125.344 22.896L125.848 23.904C125.344 24.624 124.708 25.248 123.94 25.776C123.172 26.304 122.344 26.712 121.456 27C120.592 27.288 119.692 27.432 118.756 27.432ZM128.926 27C128.926 26.184 129.118 25.704 129.502 25.56L131.554 24.84L131.158 25.452V12.492L131.59 13.032L129.502 12.6C129.334 12.552 129.19 12.408 129.07 12.168C128.974 11.928 128.926 11.604 128.926 11.196C129.934 11.028 130.69 10.92 131.194 10.872C131.698 10.8 132.118 10.764 132.454 10.764C133.126 10.764 133.606 10.932 133.894 11.268C134.206 11.604 134.362 12.168 134.362 12.96V14.364L134.11 14.112H134.506C135.13 12.984 135.91 12.084 136.846 11.412C137.782 10.716 138.682 10.368 139.546 10.368C140.482 10.368 141.154 10.572 141.562 10.98C141.97 11.388 142.174 11.928 142.174 12.6C142.174 13.104 142.018 13.536 141.706 13.896C141.394 14.256 140.986 14.436 140.482 14.436C140.17 13.836 139.834 13.428 139.474 13.212C139.114 12.972 138.718 12.852 138.286 12.852C137.638 12.852 136.954 13.14 136.234 13.716C135.514 14.268 134.866 14.94 134.29 15.732L134.578 15.012V25.416L134.038 24.732L137.242 25.452C137.242 25.836 137.194 26.136 137.098 26.352C137.002 26.568 136.822 26.784 136.558 27H128.926ZM143.438 27C143.438 26.136 143.63 25.656 144.014 25.56L146.066 24.84L145.67 25.452V2.304L146.102 2.844L144.014 2.412C143.63 2.34 143.438 1.872 143.438 1.008C144.422 0.839998 145.166 0.731999 145.67 0.684C146.198 0.611999 146.63 0.575999 146.966 0.575999C147.638 0.575999 148.118 0.743999 148.406 1.08C148.718 1.392 148.874 1.908 148.874 2.628V14.148L148.658 13.932H149.09C150.05 12.828 151.142 11.964 152.366 11.34C153.614 10.692 154.814 10.368 155.966 10.368C158.75 10.368 160.142 12.288 160.142 16.128V25.272L159.746 24.768L162.374 25.488C162.374 25.872 162.338 26.172 162.266 26.388C162.194 26.58 162.038 26.784 161.798 27H154.85C154.85 26.136 155.042 25.656 155.426 25.56L157.154 24.984L156.794 25.596V16.308C156.794 13.908 155.882 12.708 154.058 12.708C153.41 12.708 152.762 12.84 152.114 13.104C151.466 13.368 150.866 13.704 150.314 14.112C149.786 14.52 149.342 14.94 148.982 15.372L149.09 15.012V25.416L148.658 24.912L150.998 25.488C150.998 25.872 150.95 26.172 150.854 26.388C150.782 26.58 150.614 26.784 150.35 27H143.438ZM168.844 27.432C167.74 27.432 166.816 27.096 166.072 26.424C165.328 25.752 164.956 24.864 164.956 23.76C164.956 22.416 165.388 21.312 166.252 20.448C167.14 19.56 168.46 18.912 170.212 18.504L174.964 17.424L174.496 17.856V15.264C174.496 13.992 174.292 13.068 173.884 12.492C173.476 11.916 172.828 11.628 171.94 11.628C170.884 11.628 170.068 11.952 169.492 12.6C168.94 13.248 168.652 14.208 168.628 15.48C168.508 15.6 168.328 15.708 168.088 15.804C167.848 15.876 167.596 15.912 167.332 15.912C166.876 15.912 166.516 15.78 166.252 15.516C165.988 15.252 165.856 14.904 165.856 14.472C165.856 13.656 166.132 12.948 166.684 12.348C167.26 11.748 168.052 11.268 169.06 10.908C170.068 10.548 171.196 10.368 172.444 10.368C174.292 10.368 175.66 10.824 176.548 11.736C177.436 12.624 177.88 14.04 177.88 15.984V24.192C177.88 24.6 177.964 24.912 178.132 25.128C178.3 25.344 178.552 25.452 178.888 25.452C179.128 25.452 179.404 25.392 179.716 25.272C180.028 25.128 180.292 24.972 180.508 24.804L180.76 25.884C180.352 26.364 179.824 26.736 179.176 27C178.528 27.288 177.916 27.432 177.34 27.432C176.5 27.432 175.852 27.18 175.396 26.676C174.94 26.172 174.712 25.452 174.712 24.516H174.532C173.836 25.452 172.984 26.172 171.976 26.676C170.992 27.18 169.948 27.432 168.844 27.432ZM170.5 25.488C171.292 25.488 172.072 25.284 172.84 24.876C173.632 24.444 174.28 23.856 174.784 23.112L174.532 23.832V18.612L175.036 18.684L171.076 19.62C170.092 19.86 169.336 20.256 168.808 20.808C168.304 21.36 168.052 22.056 168.052 22.896C168.052 23.688 168.268 24.324 168.7 24.804C169.132 25.26 169.732 25.488 170.5 25.488ZM183.067 27C183.067 26.136 183.259 25.656 183.643 25.56L185.695 24.84L185.299 25.452V12.492L185.731 13.032L183.643 12.6C183.259 12.528 183.067 12.06 183.067 11.196C184.051 11.028 184.795 10.92 185.299 10.872C185.827 10.8 186.259 10.764 186.595 10.764C187.291 10.764 187.783 10.932 188.071 11.268C188.359 11.58 188.503 12.096 188.503 12.816V14.004L188.287 13.932H188.719C189.703 12.828 190.807 11.964 192.031 11.34C193.255 10.692 194.443 10.368 195.595 10.368C198.379 10.368 199.771 12.288 199.771 16.128V25.272L199.339 24.768L202.003 25.488C202.003 25.872 201.967 26.172 201.895 26.388C201.823 26.58 201.667 26.784 201.427 27H194.515C194.515 26.136 194.707 25.656 195.091 25.56L196.783 24.984L196.423 25.596V16.308C196.423 13.908 195.523 12.708 193.723 12.708C193.027 12.708 192.343 12.852 191.671 13.14C190.999 13.404 190.375 13.752 189.799 14.184C189.247 14.616 188.791 15.084 188.431 15.588L188.719 14.904V25.416L188.287 24.912L190.663 25.488C190.663 25.872 190.615 26.172 190.519 26.388C190.423 26.58 190.243 26.784 189.979 27H183.067ZM210.768 27.432C209.496 27.432 208.38 27.12 207.42 26.496C206.484 25.848 205.752 24.948 205.224 23.796C204.696 22.644 204.432 21.3 204.432 19.764C204.432 17.916 204.78 16.296 205.476 14.904C206.196 13.488 207.168 12.384 208.392 11.592C209.64 10.776 211.068 10.368 212.676 10.368C213.396 10.368 214.116 10.452 214.836 10.62C215.58 10.764 216.312 10.992 217.032 11.304L216.744 11.808V2.268L217.176 2.808L214.872 2.412C214.536 2.364 214.368 1.896 214.368 1.008C215.352 0.839998 216.108 0.731999 216.636 0.684C217.164 0.611999 217.596 0.575999 217.932 0.575999C218.7 0.575999 219.252 0.743999 219.588 1.08C219.924 1.416 220.092 1.968 220.092 2.736V24.192C220.092 24.6 220.176 24.912 220.344 25.128C220.536 25.344 220.8 25.452 221.136 25.452C221.4 25.452 221.676 25.392 221.964 25.272C222.276 25.128 222.54 24.984 222.756 24.84L223.044 25.92C222.588 26.376 222.036 26.736 221.388 27C220.74 27.288 220.128 27.432 219.552 27.432C218.736 27.432 218.1 27.168 217.644 26.64C217.188 26.112 216.96 25.38 216.96 24.444H216.78C216.156 25.284 215.328 25.992 214.296 26.568C213.264 27.144 212.088 27.432 210.768 27.432ZM212.496 25.308C213.192 25.308 213.816 25.2 214.368 24.984C214.92 24.768 215.424 24.456 215.88 24.048C216.336 23.64 216.768 23.184 217.176 22.68L216.78 23.472V12.564L217.176 13.464C216.624 12.984 216.036 12.612 215.412 12.348C214.788 12.06 214.02 11.916 213.108 11.916C211.524 11.916 210.288 12.528 209.4 13.752C208.512 14.976 208.068 16.728 208.068 19.008C208.068 21.072 208.44 22.644 209.184 23.724C209.952 24.78 211.056 25.308 212.496 25.308ZM232.557 27.432C231.045 27.432 229.725 27.108 228.597 26.46C227.493 25.788 226.629 24.864 226.005 23.688C225.381 22.488 225.069 21.12 225.069 19.584C225.069 17.832 225.441 16.26 226.185 14.868C226.929 13.476 227.925 12.384 229.173 11.592C230.421 10.776 231.789 10.368 233.277 10.368C234.573 10.368 235.689 10.656 236.625 11.232C237.585 11.808 238.329 12.612 238.857 13.644C239.409 14.652 239.685 15.828 239.685 17.172C239.685 17.652 239.601 17.976 239.433 18.144C239.265 18.312 239.049 18.396 238.785 18.396H227.481V17.1L236.913 16.884L236.517 17.316C236.565 16.164 236.433 15.18 236.121 14.364C235.833 13.524 235.413 12.876 234.861 12.42C234.309 11.964 233.661 11.736 232.917 11.736C231.669 11.736 230.649 12.324 229.857 13.5C229.089 14.676 228.705 16.332 228.705 18.468C228.705 19.908 228.909 21.156 229.317 22.212C229.749 23.268 230.361 24.084 231.153 24.66C231.969 25.236 232.953 25.524 234.105 25.524C235.041 25.524 235.941 25.296 236.805 24.84C237.669 24.384 238.449 23.736 239.145 22.896L239.649 23.904C239.145 24.624 238.509 25.248 237.741 25.776C236.973 26.304 236.145 26.712 235.257 27C234.393 27.288 233.493 27.432 232.557 27.432ZM242.403 27C242.403 26.544 242.451 26.208 242.547 25.992C242.643 25.776 242.787 25.632 242.979 25.56L245.175 24.84L244.779 25.344V2.304L245.211 2.844L242.979 2.412C242.595 2.34 242.403 1.872 242.403 1.008C243.243 0.887998 243.975 0.791998 244.599 0.719999C245.223 0.623999 245.835 0.575999 246.435 0.575999C247.611 0.575999 248.199 1.296 248.199 2.736V25.272L247.767 24.768L250.719 25.488C250.719 25.872 250.671 26.172 250.575 26.388C250.503 26.58 250.335 26.784 250.071 27H242.403Z"
        fill="white"
      />
    </svg>
  );
}
