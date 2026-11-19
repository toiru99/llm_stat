---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 55.4567513536134
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.1, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.58, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.54, r: 58.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.2, z: 0.45, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 1.0, r: 65.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 55.4567513536134 t/s · TTFT 7.15471439052776s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[gpqa-diamond]] 84.24242424242419%×0.4, [[humanitys-last-exam]] 23.0769230769231%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 84.24242424242419%×1.0, [[humanitys-last-exam]] 23.0769230769231%×1.0 |
| 코딩 | 58.6 | +0.58 | 실측 | [[scicode]] 42.8240740740741%×1.0, [[terminal-bench]] 34.8484848484849%×0.5 |
| 에이전트 | 58.1 | +0.54 | 실측 | [[gdpval]] 992.58%×1.0, [[tau2-bench]] 94.15204678362569%×1.0, [[tau3-banking]] 16.7010309278351%×1.0, [[terminal-bench]] 34.8484848484849%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.7 | +0.45 | 실측 | [[mmmu-pro]] 74.6242774566474%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 실측 | [[ifbench]] 67.5510204081633%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
