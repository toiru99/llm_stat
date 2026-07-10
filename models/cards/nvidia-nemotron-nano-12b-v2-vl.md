---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.24
output_speed_tps: 293.0
context_window: 128000
radar:
  knowledge: { s: 27.1, z: -1.29, r: 30.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.0, z: -1.25, r: 31.2, estimated: false }  # 추론
  coding: { s: 31.4, z: -1.44, r: 28.3, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -1.59, r: 26.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 46.6, z: -1.8, r: 22.9, estimated: false }  # 멀티모달
  long_context: { s: 54.1, z: -0.75, r: 38.7, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.93, r: 21.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 293.0 t/s · TTFT 0.45s · 128k ctx` · 가성비 37.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.6 | -1.29 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.2 | -1.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 28.3 | -1.44 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 26.1 | -1.59 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 22.9 | -1.8 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 38.7 | -0.75 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 21.1 | -1.93 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
