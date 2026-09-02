---
type: Model
title: Gemini 3 Flash (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 0.435
output_speed_tps: 171.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.3, z: 1.19, r: 67.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.9, z: 0.12, r: 51.9, estimated: false }  # 추론
  coding: { s: 69.9, z: 0.98, r: 64.8, estimated: false }  # 코딩
  agentic: { s: 46.0, z: 0.34, r: 55.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 3 Flash (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 171.0 t/s · TTFT 0.84s · 1M ctx` · 가성비 64.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.9 | +1.19 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.9 | +0.12 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 64.8 | +0.98 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 55.2 | +0.34 | 실측 | [[tau2-bench]] 43.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 37.0 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
