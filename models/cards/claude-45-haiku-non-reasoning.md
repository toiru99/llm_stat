---
type: Model
title: Claude 4.5 Haiku (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.77
output_speed_tps: 104.47933474438393
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.1, z: -0.44, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.06, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 37.1, z: -0.26, r: 46.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.4, z: -0.86, r: 37.0, estimated: false }  # 멀티모달
  long_context: { s: 56.0, z: 0.08, r: 51.2, estimated: false }  # 긴문맥
  instruction: { s: 42.0, z: -0.49, r: 42.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 4.5 Haiku (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 104.47933474438393 t/s · TTFT 1.068183394491667s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.44 | 실측 | [[gpqa-diamond]] 64.6464646464646%×0.4, [[humanitys-last-exam]] 4.21686746987952%×0.3 |
| 추론 | 40.5 | -0.63 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.6464646464646%×1.0, [[humanitys-last-exam]] 4.21686746987952%×1.0 |
| 코딩 | 50.8 | +0.06 | 실측 | [[terminal-bench]] 27.2727272727273%×0.5 |
| 에이전트 | 46.1 | -0.26 | 실측 | [[tau2-bench]] 32.4561403508772%×1.0, [[terminal-bench]] 27.2727272727273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.0 | -0.86 | 실측 | [[mmmu-pro]] 55.144508670520196%×1.0 |
| 긴문맥 | 51.2 | +0.08 | 실측 | [[aa-lcr]] 49.6666666666667%×1.0 |
| 지시 따르기 | 42.7 | -0.49 | 실측 | [[ifbench]] 42.0408163265306%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
