---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 1.05
output_speed_tps: 178.0
context_window: 262000
radar:
  knowledge: { s: 37.8, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 48.6, z: -0.46, r: 43.0, estimated: false }  # 코딩
  agentic: { s: 29.1, z: -0.9, r: 36.5, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.1, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.09, r: 51.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · 컨텍스트 262k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $6.0 · 혼합 $1.05/1M · 178.0 t/s · TTFT 2.11s · 262k ctx` · 가성비 19.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 43.0 | -0.46 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 36.5 | -0.9 | 실측 | [[tau2-bench]] 42.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 51.3 | +0.09 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
