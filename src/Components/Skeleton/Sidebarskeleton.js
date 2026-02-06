import { Skeleton } from 'antd';



const SidebarSkeleton = ({ isOpen }) => {
  return (
    <div style={{ padding: "12px" }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <Skeleton.Avatar active size="medium" shape="square" />

          {isOpen && (
            <Skeleton.Input
              active
              size="small"
              style={{ width: 170 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarSkeleton;
