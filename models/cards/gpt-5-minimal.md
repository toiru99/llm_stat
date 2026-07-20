---
type: Model
title: GPT-5 (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 1.34
output_speed_tps: 87.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: 0.16, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.44, r: 43.3, estimated: false }  # 추론
  coding: { s: 52.4, z: 0.26, r: 53.9, estimated: false }  # 코딩
  agentic: { s: 47.5, z: 0.43, r: 56.5, estimated: false }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.2, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.17, r: 47.5, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.47, r: 43.0, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.19, r: 47.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# GPT-5 (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 87.0 t/s · TTFT 1.12s · 400k ctx` · 가성비 12.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.16 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.3 | -0.44 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.9 | +0.26 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 56.5 | +0.43 | 실측 | [[tau2-bench]] 67.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 47.5 | -0.17 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 43.0 | -0.47 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 47.1 | -0.19 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
