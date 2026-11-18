---
type: Model
title: Claude Opus 4.5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 60.65691818155506
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.7, z: 0.98, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 71.3, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.4, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 64.4, z: 0.44, r: 56.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Claude Opus 4.5

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 60.65691818155506 t/s · TTFT 12.323373886772215s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.98 | 실측 | [[gpqa-diamond]] 86.5656565656566%×0.4, [[humanitys-last-exam]] 30.120481927710802%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 4.57142857142857%×1.0, [[gpqa-diamond]] 86.5656565656566%×1.0, [[humanitys-last-exam]] 30.120481927710802%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[terminal-bench]] 46.969696969697%×0.5 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[tau2-bench]] 89.4736842105263%×1.0, [[terminal-bench]] 46.969696969697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 74.0462427745665%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 56.6 | +0.44 | 실측 | [[ifbench]] 57.959183673469404%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
