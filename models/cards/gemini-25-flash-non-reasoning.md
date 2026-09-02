---
type: Model
title: Gemini 2.5 Flash (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.331
output_speed_tps: 189.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.1, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 37.2, z: -0.4, r: 44.0, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: 0.02, r: 50.3, estimated: false }  # 멀티모달
  long_context: { s: 57.8, z: 0.24, r: 53.7, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 2.5 Flash (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 189.0 t/s · TTFT 0.43s · 1M ctx` · 가성비 42.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.0 | -0.4 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 50.3 | +0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 53.7 | +0.24 | 실측 | [[aa-lcr]] 48.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
