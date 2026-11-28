---
type: Model
title: MiniMax-M3.1-Flash
creator: MiniMax
license: Open
intelligence_index: 29.0595214290458
price_blended_usd_1m: 0.1005
output_speed_tps: 133.55024645744
context_window: 1000000
status: current
size_class: Large
params_b: 428
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 0.84, r: 62.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.39, r: 70.9, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.76, r: 61.3, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3.1-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# MiniMax-M3.1-Flash

MiniMax · Open · Large(428B) · 컨텍스트 1M · 종합지능 **29.0595214290458**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 133.55024645744 t/s · TTFT 1.51110305230131s · 1M ctx` · 가성비 289.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.6 | +0.84 | 실측 | [[humanitys-last-exam]] 47.9611%×0.3 |
| 추론 | 70.9 | +1.39 | 실측 | [[critpt]] 22.2857%×1.0, [[humanitys-last-exam]] 47.9611%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 53.3565%×1.0 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[gdpval]] 1466.41 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.3 | +0.76 | 실측 | [[mmmu-pro]] 79.1329%×1.0 |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
