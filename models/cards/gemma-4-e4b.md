---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.028
output_speed_tps: 38.0
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: true
radar:
  knowledge: { s: 21.9, z: -0.91, r: 36.3, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 69.1, z: 2.11, r: 81.7, estimated: false }  # 신뢰성
  multimodal: { s: 50.0, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.4, r: 43.9, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemma 4 E4B

Google · Open · Small(8B) · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 38.0 t/s · TTFT 0.9s · 128k ctx` · 가성비 214.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 81.7 | +2.11 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 43.9 | -0.4 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
