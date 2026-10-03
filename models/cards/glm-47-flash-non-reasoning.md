---
type: Model
title: GLM-4.7-Flash (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.082
output_speed_tps: 90.0
context_window: 200000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.2, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.04, r: 34.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.88, r: 36.8, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.27, r: 46.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GLM-4.7-Flash (non-reasoning)

Z AI · Open · Small · 컨텍스트 200k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.082/1M · 90.0 t/s · TTFT 1.57s · 200k ctx` · 가성비 134.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 34.4 | -1.04 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.8 | -0.88 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 46.0 | -0.27 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
