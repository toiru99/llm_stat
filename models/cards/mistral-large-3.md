---
type: Model
title: Mistral Large 3
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.285
output_speed_tps: 89.0
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.1, z: -0.59, r: 41.1, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.12, r: 51.8, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.53, r: 42.1, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.68, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: 56.2, z: -0.8, r: 38.0, estimated: false }  # 멀티모달
  long_context: { s: 40.4, z: -0.38, r: 44.4, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.88, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Mistral Large 3

Mistral · Open · Large · 컨텍스트 256k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.285/1M · 89.0 t/s · TTFT 1.14s · 256k ctx` · 가성비 31.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.1 | -0.59 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.8 | +0.12 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 42.1 | -0.53 | 실측 | [[gdpval]] 420.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 38.0 | -0.8 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 44.4 | -0.38 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 36.7 | -0.88 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
