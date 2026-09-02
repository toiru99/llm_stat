---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.255
output_speed_tps: 178.0
context_window: 262000
status: current
size_class: Medium
params_b: 80
is_reasoning: false
radar:
  knowledge: { s: 34.8, z: -0.28, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 37.4, z: -0.4, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 17.2, z: -0.78, r: 38.3, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.7, z: 0.39, r: 55.9, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.56, r: 41.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $1.2 · 혼합 $0.255/1M · 178.0 t/s · TTFT 2.12s · 262k ctx` · 가성비 54.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.28 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 44.1 | -0.4 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.3 | -0.78 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.9 | +0.39 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
