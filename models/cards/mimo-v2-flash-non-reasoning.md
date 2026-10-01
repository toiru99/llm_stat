---
type: Model
title: MiMo-V2-Flash (non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: 16.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.7, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 39.4, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.22, r: 53.3, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.18, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 40.4, z: -0.34, r: 44.9, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# MiMo-V2-Flash (non-reasoning)

Xiaomi · Open · Large · 컨텍스트 256k · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 53.3 | +0.22 | 실측 | [[gdpval]] 6.0%×1.0, [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 47.2 | -0.18 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.9 | -0.34 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
