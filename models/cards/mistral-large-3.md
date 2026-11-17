---
type: Model
title: Mistral Large 3
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.285
output_speed_tps: 86.14185871011806
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.57, r: 41.4, estimated: false }  # 추론
  coding: { s: 40.6, z: 0.03, r: 50.4, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 55.1, z: -0.83, r: 37.6, estimated: false }  # 멀티모달
  long_context: { s: 40.6, z: -0.38, r: 44.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.83, r: 37.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Large 3

Mistral · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.285/1M · 86.14185871011806 t/s · TTFT 2.3002869807451165s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[gpqa-diamond]] 67.979797979798%×0.4, [[humanitys-last-exam]] 4.17052826691381%×0.3 |
| 추론 | 41.4 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.979797979798%×1.0, [[humanitys-last-exam]] 4.17052826691381%×1.0 |
| 코딩 | 50.4 | +0.03 | 실측 | [[scicode]] 36.5740740740741%×1.0, [[terminal-bench]] 15.909090909090901%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[gdpval]] 427.29%×1.0, [[tau2-bench]] 24.5614035087719%×1.0, [[tau3-banking]] 5.77319587628866%×1.0, [[terminal-bench]] 15.909090909090901%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.6 | -0.83 | 실측 | [[mmmu-pro]] 55.6647398843931%×1.0 |
| 긴문맥 | 44.3 | -0.38 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 37.6 | -0.83 | 실측 | [[ifbench]] 36.190476190476204%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
