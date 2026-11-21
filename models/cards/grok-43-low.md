---
type: Model
title: Grok 4.3 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 72.2823097682
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.4, z: 0.58, r: 58.7, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.08, r: 51.1, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 65.0, z: 0.69, r: 60.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.7, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.88, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 96.7, z: 1.79, r: 76.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Grok 4.3 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 72.2823097682 t/s · TTFT 8.35452087185784s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.7 | +0.58 | 실측 | [[gpqa-diamond]] 84.3434343434343%×0.4, [[humanitys-last-exam]] 18.3503243744208%×0.3 |
| 추론 | 51.1 | +0.08 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 84.3434343434343%×1.0, [[humanitys-last-exam]] 18.3503243744208%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 60.4 | +0.69 | 실측 | [[tau2-bench]] 88.8888888888889%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 72.7745664739884%×1.0 |
| 긴문맥 | 63.3 | +0.88 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 76.9 | +1.79 | 실측 | [[ifbench]] 80.95238095238099%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
