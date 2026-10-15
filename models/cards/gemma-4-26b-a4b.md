---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.095
output_speed_tps: 65.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 40.9, z: -0.09, r: 48.7, estimated: false }  # 전문 지식
  reasoning: { s: 36.7, z: 0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 27.1, z: -0.46, r: 43.1, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.66, r: 40.0, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.12, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 74.2, z: 0.66, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.25, r: 68.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.095/1M · 65.0 t/s · TTFT 0.97s · 256k ctx` · 가성비 178.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 50.0 | +0.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.1 | -0.46 | 실측 | [[gdpval]] 3.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 44.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 40.0 | -0.66 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 51.9 | +0.12 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.0 | +0.66 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 68.7 | +1.25 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
