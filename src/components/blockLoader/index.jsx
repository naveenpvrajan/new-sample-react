import BlockUi from 'react-block-ui';
import CircularProgress from '@mui/material/CircularProgress';

function BlockLoader({ loading=false, className, style, renderChildren = true, children }) {
  return (
    <BlockUi
      tag="div"
      blocking={loading}
      renderChildren={renderChildren}
      keepInView
      className={className}
      loader={<CircularProgress size={50} />}
      style={{ ...style, minHeight: 'auto' }}
    >
      {children}
    </BlockUi>
  );
}

export default BlockLoader;
