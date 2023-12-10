import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../theme/ThemeContextProvider';
import { NightModeToggleContainer, StyledIconButton } from './style';

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <NightModeToggleContainer>
      <StyledIconButton
        sx={{ ml: 1 }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </StyledIconButton>
    </NightModeToggleContainer>
  );
};

export default NightModeToggle;
