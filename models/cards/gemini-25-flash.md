---
type: Model
title: Gemini 2.5 Flash
creator: Google
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 0.331
output_speed_tps: 222.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 44.9, z: 0.16, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.48, r: 42.8, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.42, r: 43.6, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.09, r: 48.6, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.18, r: 52.7, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.0, r: 50.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Gemini 2.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 222.0 t/s · TTFT 17.79s · 1M ctx` · 가성비 39.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.16 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 42.8 | -0.48 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.6 | -0.42 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 52.7 | +0.18 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 50.0 | +-0.0 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
