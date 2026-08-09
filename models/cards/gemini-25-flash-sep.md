---
type: Model
title: Gemini 2.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.4, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.4, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 54.1, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 36.1, z: 0.02, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.11, r: 51.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Gemini 2.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 50.2 | +0.02 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 51.7 | +0.11 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
