"use client";

import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { IconPlayerPause, IconPlayerPlay, IconVolume, IconVolumeOff } from "@tabler/icons-react";
import classes from "./VimeoPalyerComponent.module.css";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const VimeoPlayerLeftBottom = () => {
    const theme = useMantineTheme();
    const xs = theme.breakpoints.xs;
    const sm = theme.breakpoints.sm;
    const md = theme.breakpoints.md;
    const lg = theme.breakpoints.lg;
    const xl = theme.breakpoints.xl;

    const matchXs = useMediaQuery(`(min-width: ${xs})`);
    const matchSm = useMediaQuery(`(min-width: ${sm})`);
    const matchMd = useMediaQuery(`(min-width: ${md})`);
    const matchLg = useMediaQuery(`(min-width: ${lg})`);
    const matchXl = useMediaQuery(`(min-width: ${xl})`);

    const playerInstanceRefLeftBottomLeftBottom = useRef<HTMLDivElement>(null);
    const playerElementRefLeftBottom = useRef<HTMLDivElement>(null);
    const playerInstanceRefLeftBottom = useRef<Player | null>(null);

    const playPauseButtonRef = useRef<HTMLButtonElement>(null);
    const muteButtonRef = useRef<HTMLButtonElement>(null);
    const restartButtonRef = useRef<HTMLButtonElement>(null);
    
    const videoId = 1039409107;
    const width = 197;
    const height = 350;
    const autoplay = true;
    const loop = true;
    const muted = true;

    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    // Сохраняем состояние плеера при размонтировании
    const playerStateRef = useRef({
        currentTime: 0,
        isPlaying: autoplay,
        isMuted: muted
    });

    // Инициализация и уничтожение плеера
    useEffect(() => {
        if (!playerElementRefLeftBottom.current) return;

        const initPlayer = async () => {
            const player = new Player(playerElementRefLeftBottom.current!, {
                id: Number(videoId),
                width,
                height,
                autoplay,
                loop,
                muted,
                controls: false,
                playsinline: true,
                quality: "360p",
            });

            playerInstanceRefLeftBottom.current = player;

            // Восстанавливаем состояние из ref
            await player.setCurrentTime(playerStateRef.current.currentTime);
            await player.setMuted(playerStateRef.current.isMuted);
            
            if (playerStateRef.current.isPlaying) {
                await player.play();
            } else {
                await player.pause();
            }

            setDuration(await player.getDuration());
            setCurrentTime(await player.getCurrentTime());
            setIsPlayerReady(true);

            player.on("play", () => {
                setIsPlaying(true);
                playerStateRef.current.isPlaying = true;
            });
            player.on("pause", () => {
                setIsPlaying(false);
                playerStateRef.current.isPlaying = false;
            });
            player.on("timeupdate", async () => {
                const time = await player.getCurrentTime();
                setCurrentTime(time);
                playerStateRef.current.currentTime = time;
            });
            player.on("ended", () => {
                setIsPlaying(false);
                playerStateRef.current.isPlaying = false;
            });
            player.on("volumechange", (data: { volume: number; muted: boolean }) => {
                setIsMuted(data.muted);
                playerStateRef.current.isMuted = data.muted;
            });

            return () => {
                // Сохраняем состояние перед уничтожением
                player.getCurrentTime().then(time => {
                    playerStateRef.current.currentTime = time;
                });
                player.getMuted().then(muted => {
                    playerStateRef.current.isMuted = muted;
                });
                player.getPaused().then(paused => {
                    playerStateRef.current.isPlaying = !paused;
                });

                player.off("play");
                player.off("pause");
                player.off("timeupdate");
                player.off("ended");
                player.off("volumechange");
                player.destroy();
                playerInstanceRefLeftBottom.current = null;
                setIsPlayerReady(false);
            };
        };

        initPlayer().catch(console.error);

        return () => {
            if (playerInstanceRefLeftBottom.current) {
                playerInstanceRefLeftBottom.current.destroy();
                playerInstanceRefLeftBottom.current = null;
            }
        };
    }, [videoId]);

    // Обновляем плеер при изменении размера окна
    useEffect(() => {
        const handleResize = async () => {
            if (playerInstanceRefLeftBottom.current && isPlayerReady) {
                try {
                        await playerInstanceRefLeftBottom.current.setCurrentTime(playerStateRef.current.currentTime);
                        await playerInstanceRefLeftBottom.current.setMuted(playerStateRef.current.isMuted);
                        
                        if (playerStateRef.current.isPlaying) {
                            await playerInstanceRefLeftBottom.current.play();
                        } else {
                            await playerInstanceRefLeftBottom.current.pause();
                        }
                } catch (error) {
                    console.error("Error resizing player:", error);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isPlayerReady, matchXs, matchSm, matchMd, matchLg, matchXl]);

    // Остальные обработчики остаются без изменений
    const updateCurrentTime = async () => {
        if (playerInstanceRefLeftBottom.current) {
            setCurrentTime(await playerInstanceRefLeftBottom.current.getCurrentTime());
        }
    };

    const handlePlayPause = async () => {
        if (!playerInstanceRefLeftBottom.current) return;
        try {
            if (isPlaying) {
                await playerInstanceRefLeftBottom.current.pause();
            } else {
                await playerInstanceRefLeftBottom.current.play();
            }
        } catch (error) {
            console.error("Play/pause error:", error);
        }
    };     

    const handleSeek = async (seconds: number) => {
        if (!playerInstanceRefLeftBottom.current) return;
        try {
            const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
            await playerInstanceRefLeftBottom.current.setCurrentTime(newTime);
            showSeekFeedback(seconds > 0 ? "+10s" : "-10s");
        } catch (error) {
            console.error("Seek error:", error);
        }
    };

    const showSeekFeedback = (text: string) => {
        const feedback = document.createElement("div");
        feedback.textContent = text;
        feedback.style.position = "absolute";
        feedback.style.left = "50%";
        feedback.style.top = "50%";
        feedback.style.transform = "translate(-50%, -50%)";
        feedback.style.backgroundColor = "rgba(0,0,0,0.7)";
        feedback.style.color = "white";
        feedback.style.padding = "8px 16px";
        feedback.style.borderRadius = "20px";
        feedback.style.zIndex = "20";
        feedback.style.fontSize = "16px";
        feedback.style.fontWeight = "bold";

        playerInstanceRefLeftBottomLeftBottom.current?.appendChild(feedback);

        feedback.animate(
            [
                { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
                { opacity: 1, transform: "translate(-50%, -50%) scale(1.2)" },
                { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
            ],
            { duration: 600, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
        );

        setTimeout(() => feedback.remove(), 600);
    };

    const handleDoubleClick = (e: React.MouseEvent) => {
        if (!playerInstanceRefLeftBottomLeftBottom.current) return;

        const rect = playerInstanceRefLeftBottomLeftBottom.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const isLeftSide = x < rect.width / 2;

        handleSeek(isLeftSide ? -10 : 10);
    };

    const handleMuteToggle = async () => {
        if (!playerInstanceRefLeftBottom.current) return;
        try {
            const newMutedState = !isMuted;
            await playerInstanceRefLeftBottom.current.setMuted(newMutedState);
            setIsMuted(newMutedState);
        } catch (error) {
            console.error("Mute toggle error:", error);
        }
    };

    const handleRestart = async () => {
        if (!playerInstanceRefLeftBottom.current) return;
        try {
            await playerInstanceRefLeftBottom.current.setCurrentTime(0);
            await playerInstanceRefLeftBottom.current.play();
        } catch (error) {
            console.error("Restart error:", error);
        }
    };
    return (
        <div className={classes.left_bottom}>
            <div
                ref={playerInstanceRefLeftBottomLeftBottom}
                className="vimeo-player-container"
                style={{
                    position: "relative",
                    width: `${width}px`,
                    height: `${height}px`,
                    borderRadius: "30px",
                    overflow: "hidden",
                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.8)",
                    cursor: "pointer",
                    zIndex: 1001,
                    marginTop: "20px",
                }}
                onDoubleClick={handleDoubleClick}
            >
                <div
                    ref={playerElementRefLeftBottom}
                    className="vimeo-player"
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000",
                    }}
                />

                <button
                    ref={playPauseButtonRef}
                    className="player-control play-pause"
                    onClick={handlePlayPause}
                    style={{
                        position: "absolute",
                        bottom: "14px",
                        right: "56px",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 1002,
                        fontSize: "16px",
                    }}
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <IconPlayerPause size="15" /> : <IconPlayerPlay size="15" />}
                </button>

                <button
                    ref={muteButtonRef}
                    className="player-control mute"
                    onClick={handleMuteToggle}
                    style={{
                        position: "absolute",
                        bottom: "14px",
                        right: "16px",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 1002,
                        fontSize: "16px",
                    }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <IconVolumeOff size="15" /> : <IconVolume size="15" />}
                </button>

                <button
                    ref={restartButtonRef}
                    className="player-control restart"
                    onClick={handleRestart}
                    style={{
                        position: "absolute",
                        bottom: "14px",
                        left: "16px",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "20px",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        cursor: "pointer",
                        zIndex: 1002,
                        fontSize: "14px",
                    }}
                    aria-label="Restart"
                >
                    <span>⟲</span>
                    <span>Restart</span>
                </button>

                {!isPlaying && (
                    <div
                        className="pause-overlay"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.3)",
                            zIndex: 1002,
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
};
