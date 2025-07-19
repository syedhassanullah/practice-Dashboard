import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.0 }}
            transition={{ duration: 0.3 }}
            className="top"
          >
            <h1>Dashboard</h1>
          </motion.div>

          <div className='middle'>
            <div className='sec'>
              <motion.div
                className='minsec'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className='minsec'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              className='sec'
              initial={{ opacity: 0, scale: 0.0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className='minsec'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className='minsec'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className='minsec'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          <div className='middle2'>
            <motion.div
              className='m2left'
              initial={{ opacity: 0, scale: 0.0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className='m2right'
              initial={{ opacity: 0, scale: 0.0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className='m2rightchild'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className='m2rightchild'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className='m2rightchild'
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
