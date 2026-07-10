---
type: Model
title: Nemotron 3 Nano Omni 30B A3B Reasoning
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1
output_speed_tps: 299.0
context_window: 256000
radar:
  knowledge: { s: 25.3, z: -1.37, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -1.43, r: 28.5, estimated: false }  # 추론
  coding: { s: 35.2, z: -1.28, r: 30.8, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: 16.2, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: 46.6, z: -1.8, r: 22.9, estimated: false }  # 멀티모달
  long_context: { s: 48.6, z: -0.96, r: 35.7, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.09, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B Reasoning

NVIDIA · Open · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.1/1M · 299.0 t/s · TTFT 0.98s · 256k ctx` · 가성비 150.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.37 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.5 | -1.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.8 | -1.28 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 22.9 | -1.8 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 35.7 | -0.96 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 51.4 | +0.09 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
