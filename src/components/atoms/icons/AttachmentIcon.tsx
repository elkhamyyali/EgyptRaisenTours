import React from "react"

export default function AttachmentIcon({ className, action }: any) {
  return (
    <div>
      <svg
        width="24"
        onClick={action}
        className={className}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6558 11.4694C19.7255 11.5391 19.7808 11.6218 19.8186 11.7128C19.8563 11.8039 19.8757 11.9015 19.8757 12C19.8757 12.0986 19.8563 12.1962 19.8186 12.2873C19.7808 12.3783 19.7255 12.461 19.6558 12.5307L11.9636 20.2182C10.9788 21.2028 9.6433 21.7559 8.25076 21.7558C6.85821 21.7557 5.52274 21.2024 4.53812 20.2177C3.5535 19.233 3.0004 17.8974 3.00049 16.5049C3.00058 15.1123 3.55385 13.7769 4.53859 12.7922L13.8442 3.34973C14.5472 2.64596 15.5011 2.25028 16.4958 2.24976C17.4906 2.24923 18.4448 2.64389 19.1486 3.34692C19.8524 4.04995 20.248 5.00376 20.2486 5.99853C20.2491 6.99329 19.8544 7.94752 19.1514 8.6513L9.8439 18.0938C9.42121 18.5165 8.84792 18.754 8.25015 18.754C7.65238 18.754 7.07909 18.5165 6.6564 18.0938C6.23371 17.6711 5.99625 17.0978 5.99625 16.5C5.99625 15.9023 6.23371 15.329 6.6564 14.9063L14.4658 6.97317C14.5342 6.90019 14.6165 6.84164 14.7079 6.80095C14.7993 6.76026 14.8979 6.73827 14.9979 6.73625C15.0979 6.73424 15.1973 6.75225 15.2902 6.78923C15.3832 6.82621 15.4678 6.8814 15.539 6.95157C15.6103 7.02173 15.6669 7.10545 15.7053 7.19779C15.7438 7.29013 15.7634 7.38923 15.7629 7.48926C15.7625 7.58929 15.7421 7.68822 15.7029 7.78023C15.6636 7.87225 15.6064 7.95548 15.5345 8.02505L7.72421 15.9666C7.65428 16.036 7.5987 16.1185 7.56065 16.2093C7.52259 16.3002 7.5028 16.3976 7.50241 16.4961C7.50202 16.5946 7.52103 16.6922 7.55836 16.7834C7.5957 16.8746 7.65062 16.9575 7.71999 17.0274C7.78937 17.0973 7.87184 17.1529 7.96269 17.191C8.05355 17.229 8.15101 17.2488 8.24951 17.2492C8.34801 17.2496 8.44563 17.2306 8.53678 17.1932C8.62794 17.1559 8.71085 17.101 8.78078 17.0316L18.0873 7.5938C18.51 7.17198 18.7478 6.59952 18.7485 6.00237C18.7491 5.40521 18.5124 4.83227 18.0906 4.40958C17.6688 3.98689 17.0963 3.74908 16.4992 3.74846C15.902 3.74785 15.3291 3.98448 14.9064 4.4063L5.60265 13.845C5.25411 14.193 4.97753 14.6063 4.78869 15.0611C4.59985 15.516 4.50246 16.0036 4.50207 16.4961C4.50167 16.9886 4.59829 17.4764 4.78641 17.9316C4.97452 18.3868 5.25045 18.8004 5.59843 19.149C5.94641 19.4975 6.35964 19.7741 6.81451 19.9629C7.26938 20.1518 7.757 20.2491 8.24951 20.2495C8.74202 20.2499 9.22979 20.1533 9.68496 19.9652C10.1401 19.7771 10.5538 19.5012 10.9023 19.1532L18.5955 11.4657C18.7366 11.3256 18.9276 11.2473 19.1264 11.248C19.3252 11.2488 19.5156 11.3284 19.6558 11.4694Z"
          fill="#DEB00D"
        />
      </svg>
    </div>
  )
}
