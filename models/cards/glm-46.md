---
type: Model
title: GLM-4.6
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.407
output_speed_tps: 31.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 54.5, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.4, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 37.9, z: 0.02, r: 50.4, estimated: false }  # 코딩
  agentic: { s: 34.8, z: 0.02, r: 50.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.25, r: 53.8, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GLM-4.6

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.407/1M · 31.0 t/s · TTFT 3.31s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 50.4 | +0.02 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 50.3 | +0.02 | 실측 | [[gdpval]] 764.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.8 | +0.25 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
