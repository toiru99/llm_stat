---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.105
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 56.3, z: 0.63, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.39, r: 55.9, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 47.9, z: 0.35, r: 55.2, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.51, r: 42.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.61, r: 59.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.105/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 200.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 55.9 | +0.39 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 55.2 | +0.35 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 10.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 59.1 | +0.61 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
