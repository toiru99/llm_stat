---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.77
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 44.5, z: -0.21, r: 46.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.0, z: -0.79, r: 38.2, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 36.7, z: 0.08, r: 51.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 59.5, z: -0.61, r: 40.9, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 59.3, z: 0.27, r: 54.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.8 | -0.21 | 실측 | [[gpqa-diamond]] 67.2%×0.4, [[humanitys-last-exam]] 10.4%×0.3 |
| 추론 | 38.2 | -0.79 | 실측 | [[critpt]] 1.5%×1.0, [[gpqa-diamond]] 67.2%×1.0, [[humanitys-last-exam]] 10.4%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 42.2%×1.0, [[terminal-bench]] 27.3%×0.5 |
| 에이전트 | 51.2 | +0.08 | 실측 | [[gdpval]] 740.0%×1.0, [[itbench]] 27.3%×1.0, [[tau3-banking]] 9.3%×1.0, [[terminal-bench]] 27.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.9 | -0.61 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.3%×1.0 |
| 지시 따르기 | 54.0 | +0.27 | 실측 | [[ifbench]] 54.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
