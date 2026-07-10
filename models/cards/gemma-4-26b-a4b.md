---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.13
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: false
radar:
  knowledge: { s: 41.8, z: 0.07, r: 51.1, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 51.5, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 32.9, z: -0.12, r: 48.2, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.4, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.33, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.13/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 200.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 48.2 | -0.12 | 실측 | [[gdpval]] 13.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 44.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 54.9 | +0.33 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 69.9 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
