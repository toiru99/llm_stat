---
type: Model
title: GLM-5
creator: Z AI
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.66
output_speed_tps: 40.0
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 52.3, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 47.9, z: 0.65, r: 59.7, estimated: false }  # 추론
  coding: { s: 72.8, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: 73.3, z: 2.15, r: 82.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GLM-5

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 40.0 t/s · TTFT 1.21s · 200k ctx` · 가성비 62.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 59.7 | +0.65 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[apex-agents]] 14.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 82.3 | +2.15 | 실측 | [[aa-omniscience]] 65.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
