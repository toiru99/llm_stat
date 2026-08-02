---
type: Model
title: Claude 4.1 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 57.4, z: 0.76, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: 0.04, r: 50.5, estimated: false }  # 추론
  coding: { s: 62.7, z: 0.65, r: 59.8, estimated: false }  # 코딩
  agentic: { s: 61.6, z: 0.98, r: 64.7, estimated: false }  # 에이전트
  trust: { s: 39.3, z: 0.53, r: 58.0, estimated: true }  # 신뢰성
  multimodal: { s: 75.7, z: 0.19, r: 52.9, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.31, r: 54.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.1 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Claude 4.1 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.76 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 50.5 | +0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 59.8 | +0.65 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 64.7 | +0.98 | 실측 | [[tau2-bench]] 71.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 58.0 | +0.53 | 추정 | (추정) |
| 멀티모달 | 52.9 | +0.19 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 54.6 | +0.31 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
