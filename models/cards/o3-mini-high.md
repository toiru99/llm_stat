---
type: Model
title: o3-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.045
output_speed_tps: 205.185342151915
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.3, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 42.4, z: 0.08, r: 51.2, estimated: false }  # 코딩
  agentic: { s: 19.7, z: -0.87, r: 36.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.5, z: -0.15, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# o3-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 205.185342151915 t/s · TTFT 15.4132256717133s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 77.27272727272731%×0.4, [[humanitys-last-exam]] 12.04%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 77.27272727272731%×1.0, [[humanitys-last-exam]] 12.04%×1.0 |
| 코딩 | 51.2 | +0.08 | 실측 | [[scicode]] 42.8240740740741%×1.0, [[terminal-bench]] 6.06060606060606%×0.5 |
| 에이전트 | 36.9 | -0.87 | 실측 | [[gdpval]] 237.21%×1.0, [[tau2-bench]] 31.2865497076023%×1.0, [[tau3-banking]] 5.1546391752577305%×1.0, [[terminal-bench]] 6.06060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.7 | -0.15 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 67.14285714285711%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
