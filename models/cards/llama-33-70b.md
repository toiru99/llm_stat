---
type: Model
title: Llama 3.3 70B
creator: Meta
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.611
output_speed_tps: 89.0
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.5, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 4.5, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 4.6, z: -1.04, r: 34.3, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -1.05, r: 34.2, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Llama 3.3 70B

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.6 · 출력 $0.71 · 혼합 $0.611/1M · 89.0 t/s · TTFT 1.9s · 128k ctx` · 가성비 13.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.3 | -1.04 | 실측 | [[gdpval]] 174.0%×1.0, [[itbench]] 1.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.2 | -1.05 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
