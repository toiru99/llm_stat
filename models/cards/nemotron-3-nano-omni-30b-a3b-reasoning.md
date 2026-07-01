---
type: Model
title: Nemotron 3 Nano Omni 30B A3B Reasoning
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1
output_speed_tps: 300.0
context_window: 256000
radar:
  knowledge: { s: 25.3, z: -1.23, r: 31.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -1.36, r: 29.6, estimated: false }  # 추론
  coding: { s: 35.3, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 29.1, z: -0.87, r: 36.9, estimated: false }  # 에이전트
  trust: { s: 16.2, z: -0.65, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: 46.6, z: -1.53, r: 27.0, estimated: false }  # 멀티모달
  long_context: { s: 48.6, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.14, r: 52.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B Reasoning

NVIDIA · Open · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.1/1M · 300.0 t/s · TTFT 1.0s · 256k ctx` · 가성비 150.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.5 | -1.23 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 29.6 | -1.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 36.9 | -0.87 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 40.2 | -0.65 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 27.0 | -1.53 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
