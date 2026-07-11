---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.11
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.2, z: 0.92, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 46.0, z: 0.66, r: 59.9, estimated: false }  # 추론
  coding: { s: 61.5, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 52.6, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.68, r: 60.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.11/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 290.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.92 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 59.9 | +0.66 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 18.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[tau3-banking]] 19.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 60.3 | +0.68 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
