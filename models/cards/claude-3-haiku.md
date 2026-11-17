---
type: Model
title: Claude 3 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.35
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.0, z: -1.31, r: 30.3, estimated: false }  # 전문 지식
  reasoning: { s: 12.0, z: -1.16, r: 32.7, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.31, r: 30.3, estimated: false }  # 코딩
  agentic: { s: 11.2, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 21.8, z: -2.53, r: 12.1, estimated: false }  # 멀티모달
  long_context: { s: 31.2, z: -0.66, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 33.7, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 3 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $1.25 · 혼합 $0.35/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.3 | -1.31 | 실측 | [[gpqa-diamond]] 37.3737373737374%×0.4, [[humanitys-last-exam]] 4.07784986098239%×0.3 |
| 추론 | 32.7 | -1.16 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 37.3737373737374%×1.0, [[humanitys-last-exam]] 4.07784986098239%×1.0 |
| 코딩 | 30.3 | -1.31 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 21.052631578947402%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 12.1 | -2.53 | 실측 | [[mmmu-pro]] 30.8092485549133%×1.0 |
| 긴문맥 | 40.2 | -0.66 | 실측 | [[aa-lcr]] 27.6666666666667%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 36.122448979591795%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
