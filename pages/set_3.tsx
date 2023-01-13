import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/set_3.module.css'
import * as React from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import LinkIcon from '@mui/icons-material/Link';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SendIcon from '@mui/icons-material/Send';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#3571FF",
                opacity: 1,
                border: 0
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5
            }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600]
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3
        }
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500
        })
    }
}));


const inter = Inter({ subsets: ['latin'] })
type Anchor = "right";
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}


export default function Home() {
    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };


    const [open1, setOpen1] = React.useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = React.useState(false);
    const handleClick3 = () => {
        setOpen3(!open3);
    };

    const [open4, setOpen4] = React.useState(true);
    const handleClick4 = () => {
        setOpen4(!open4);
    };

    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            className={styles.memolist}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={styles.list}>
                <div className={styles.title}>
                    <p>메모장</p>
                    <AddIcon className={styles.add}></AddIcon>
                </div>

                <ListItem >
                    <div className={styles.memo1}>
                        <ListItemButton onClick={handleClick}>
                            <dl>
                                <dt>부관훼리 왕복 승선권 최종 안내 문자</dt>
                                <dd>2022.12.24</dd>
                            </dl>
                        </ListItemButton>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton >
                                    <span>
                                        [나의 여행] xxx님 부관훼리 왕복 승선권 최종안내입니다.<br /><br />

                                        ▶미팅시간 : 2022년 12월 18일 5시 00분<br />
                                        ▶미팅장소 : 부산 국제 여객터미널 3층 부관훼리 카운터앞 "원픽투어" 피켓을 찾아주세요.<br /><br />

                                        ★샌딩자 : 하동현 010-7166-3001<br /><br />

                                        ● 여행에 꼭 챙기셔야 할 것들
                                        여권, 3차접종완료증명서(영문) 또는 PCR 검사 음성확인서(영문), 엔화, 개인 상비약, 카메라 등등<br />

                                        비지트 재팬 웹 아이디와 비밀번호를 꼭 체크하세요!<br /><br />
                                        즐겁고 행복한 여행되세요^^</span>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItem>

                <ListItem>
                    <div className={styles.memo1}>
                        <ListItemButton onClick={handleClick}>
                            <dl>
                                <dt>부관훼리 왕복 승선권 최종 안내 문자</dt>
                                <dd>2022.12.24</dd>
                            </dl>
                        </ListItemButton>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton >
                                    <span>
                                        [나의 여행] xxx님 부관훼리 왕복 승선권 최종안내입니다.<br /><br />

                                        ▶미팅시간 : 2022년 12월 18일 5시 00분<br />
                                        ▶미팅장소 : 부산 국제 여객터미널 3층 부관훼리 카운터앞 "원픽투어" 피켓을 찾아주세요.<br /><br />

                                        ★샌딩자 : 하동현 010-7166-3001<br /><br />

                                        ● 여행에 꼭 챙기셔야 할 것들
                                        여권, 3차접종완료증명서(영문) 또는 PCR 검사 음성확인서(영문), 엔화, 개인 상비약, 카메라 등등<br />

                                        비지트 재팬 웹 아이디와 비밀번호를 꼭 체크하세요!<br /><br />
                                        즐겁고 행복한 여행되세요^^</span>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItem>
            </List>
        </Box>
    );

    const link = () => {
        router.push("/")
    }

    const pd_1 = () => {
        router.push("/pd_1")
    }
    const pd_2 = () => {
        router.push("/pd_2")
    }


    const rv_1 = () => {
        router.push("/rv_1")
    }
    const rv_2 = () => {
        router.push("/rv_2")
    }


    const calc_1 = () => {
        router.push("/calc_1")
    }
    const calc_2 = () => {
        router.push("/calc_2")
    }


    const set_1 = () => {
        router.push("/set_1")
    }

    const set_2 = () => {
        router.push("/set_2")
    }
    const set_3 = () => {
        router.push("/set_3")
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <>
            <Head>
                <title>TourSerVit</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.background}></div>

                <div className={styles.head}>

                    <div className={styles.logo}><Image onClick={link} src="/logo.png" alt="TourServiT" width={160} height={30}></Image></div>

                    <div className={styles.search}><Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="검색어를 입력하세요"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper></div>

                    <div className={styles.info} >
                        <Stack className={styles.avator} direction="row" spacing={2}>
                            <Avatar alt="H" src="/avator.png" />
                            <p><span>나의여행</span> 하동현 님</p>
                            <MoreVertIcon className={styles.more}></MoreVertIcon>
                        </Stack>

                        <Button className={styles.logout} variant="contained" onClick={link}>로그아웃</Button>
                    </div>

                    <div className={styles.button}>
                        <Badge className={styles.notificationnone} badgeContent={1} color="primary">
                            <NotificationsNoneIcon color="action" />
                        </Badge>

                        <SettingsIcon className={styles.setting}></SettingsIcon>

                        <FormatAlignLeftIcon className={styles.list}></FormatAlignLeftIcon>
                    </div>

                </div>

                <div className={styles.body}>
                    <div className={styles.nav}>
                        <div className={styles.menubar}>
                            <InventoryIcon className={styles.menu}></InventoryIcon>
                            <ListAltIcon className={styles.menu}></ListAltIcon>
                            <CalculateIcon className={styles.menu}></CalculateIcon>
                            <SettingsIcon className={styles.menu}></SettingsIcon>

                        </div>

                        <div>
                            <List className={styles.menu2}
                                component="nav"
                            >
                                <div>
                                    <ListItemButton className={styles.menu3} onClick={handleClick1}>
                                        <ListItemIcon>
                                            <InventoryIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="상품 관리" />
                                        {open1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                    </ListItemButton>

                                    <Collapse className={styles.menu4} in={open1} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={pd_1} primary="상품 목록" />
                                            </ListItemButton>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={pd_2} primary="상품 추가" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>

                                <div>
                                    <ListItemButton className={styles.menu3} onClick={handleClick2}>
                                        <ListItemIcon>
                                            <ListAltIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="예약 관리" />
                                        {open2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                    </ListItemButton>

                                    <Collapse className={styles.menu4} in={open2} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={rv_1} primary="예약 일정" />
                                            </ListItemButton>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={rv_2} primary="예약 명단" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>

                                <div>
                                    <ListItemButton className={styles.menu3} onClick={handleClick3}>
                                        <ListItemIcon>
                                            <CalculateIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="정산 관리" />
                                        {open3 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                    </ListItemButton>

                                    <Collapse className={styles.menu4} in={open3} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={calc_1} primary="입금 목록" />
                                            </ListItemButton>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={calc_2} primary="은행 명단" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>

                                <div>
                                    <ListItemButton className={styles.menu3} onClick={handleClick4}>
                                        <ListItemIcon>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="환경 설정" />
                                        {open4 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                    </ListItemButton>

                                    <Collapse className={styles.menu4} in={open4} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={set_1} primary="회사 정보" />
                                            </ListItemButton>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText onClick={set_2} primary="직원 목록" />
                                            </ListItemButton>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItemButton className={styles.menu5} sx={{ height: "30px" }}>
                                                <ListItemIcon sx={{ marginLeft: "-10px" }}>
                                                </ListItemIcon>
                                                <ListItemText  sx={{ color: '#3571ff' }} onClick={set_3} primary="연합사 목록" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>

                            </List>
                        </div>

                    </div>

                    <div className={styles.content}>
                        <div>
                            <h3 className={styles.title}>연합사 목록</h3>

                        </div>


                    </div>
                </div>



            </main>
            {(["right"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className={styles.memobtn}
                        onClick={toggleDrawer(anchor, true)}>
                        <Fab className={styles.memo} color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    )
}
