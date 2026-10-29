---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.9, z: 0.28, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 48.1, z: 0.37, r: 55.5, estimated: false }  # 코딩
  agentic: { s: 28.5, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.09, r: 48.7, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.28 | 실측 | [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 55.5 | +0.37 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 502.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.7 | -0.09 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
