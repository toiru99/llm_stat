---
type: Model
title: DeepSeek V3.2 Exp
creator: DeepSeek
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.12
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.5, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 37.2, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 57.9, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.29, r: 54.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# DeepSeek V3.2 Exp

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.12/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 208.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.5 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[tau2-bench]] 34.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 54.3 | +0.29 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
