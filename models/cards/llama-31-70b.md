---
type: Model
title: Llama 3.1 70B
creator: Meta
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.56
output_speed_tps: 45.0
context_window: 128000
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 27.0, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.03, r: 34.6, estimated: false }  # 추론
  coding: { s: 4.5, z: -0.96, r: 35.5, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.18, r: 47.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.82, r: 37.7, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Llama 3.1 70B

Meta · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.56 · 출력 $0.56 · 혼합 $0.56/1M · 45.0 t/s · TTFT 1.6s · 128k ctx` · 가성비 1.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.6 | -1.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.5 | -0.96 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.7 | -0.82 | 추정 | (추정) |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
