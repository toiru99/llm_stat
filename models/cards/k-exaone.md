---
type: Model
title: K-EXAONE
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.8, z: 0.26, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 34.5, z: -0.19, r: 47.2, estimated: false }  # 코딩
  agentic: { s: 47.9, z: 0.1, r: 51.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.46, r: 56.9, estimated: false }  # 긴문맥
  instruction: { s: 73.8, z: 0.84, r: 62.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# K-EXAONE

LG AI Research · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.26 | 실측 | [[gpqa-diamond]] 78.2828282828283%×0.4, [[humanitys-last-exam]] 13.9481000926784%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 1.11836734693878%×1.0, [[gpqa-diamond]] 78.2828282828283%×1.0, [[humanitys-last-exam]] 13.9481000926784%×1.0 |
| 코딩 | 47.2 | -0.19 | 실측 | [[terminal-bench]] 22.727272727272698%×0.5 |
| 에이전트 | 51.6 | +0.1 | 실측 | [[gdpval]] 374.54%×1.0, [[tau2-bench]] 74.2690058479532%×1.0, [[terminal-bench]] 22.727272727272698%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.9 | +0.46 | 실측 | [[aa-lcr]] 61.33333333333329%×1.0 |
| 지시 따르기 | 62.5 | +0.84 | 실측 | [[ifbench]] 64.69387755102039%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
