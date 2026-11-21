---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.228
output_speed_tps: 95.0677320469712
context_window: 10000000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.9, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 20.1, z: -0.77, r: 38.5, estimated: false }  # 추론
  coding: { s: 16.5, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 8.7, z: -1.25, r: 31.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.3, z: -1.03, r: 34.6, estimated: false }  # 멀티모달
  long_context: { s: 31.2, z: -0.67, r: 40.0, estimated: false }  # 긴문맥
  instruction: { s: 38.5, z: -0.64, r: 40.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Medium · 컨텍스트 10M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.18 · 출력 $0.66 · 혼합 $0.228/1M · 95.0677320469712 t/s · TTFT 1.14868068773902s · 10M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[gpqa-diamond]] 58.6868686868687%×0.4, [[humanitys-last-exam]] 3.7800000000000002%×0.3 |
| 추론 | 38.5 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.6868686868687%×1.0, [[humanitys-last-exam]] 3.7800000000000002%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[scicode]] 21.296296296296298%×1.0, [[terminal-bench]] 1.51515151515152%×0.5 |
| 에이전트 | 31.2 | -1.25 | 실측 | [[gdpval]] -156.1%×1.0, [[tau2-bench]] 15.4970760233918%×1.0, [[tau3-banking]] 3.29896907216495%×1.0, [[terminal-bench]] 1.51515151515152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.6 | -1.03 | 실측 | [[mmmu-pro]] 52.9479768786127%×1.0 |
| 긴문맥 | 40.0 | -0.67 | 실측 | [[aa-lcr]] 27.700000000000003%×1.0 |
| 지시 따르기 | 40.3 | -0.64 | 실측 | [[ifbench]] 39.5238095238095%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
