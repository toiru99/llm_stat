---
type: Model
title: GPT-5.6 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 32.242346264636
price_blended_usd_1m: 1.74
output_speed_tps: 92.6670174501211
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.2, z: 1.57, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 78.9, z: 2.18, r: 82.6, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 83.7, z: 1.29, r: 69.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.3, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.35, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.6 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.242346264636** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 92.6670174501211 t/s · TTFT 59.3886385220991s · 1M ctx` · 가성비 18.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.57 | 실측 | [[gpqa-diamond]] 92.5253%×0.4, [[humanitys-last-exam]] 42.9101%×0.3 |
| 추론 | 82.6 | +2.18 | 실측 | [[critpt]] 30%×1.0, [[gpqa-diamond]] 92.5253%×1.0, [[humanitys-last-exam]] 42.9101%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[scicode]] 54.9769%×1.0, [[terminal-bench]] 57.5758%×0.5 |
| 에이전트 | 69.3 | +1.29 | 실측 | [[gdpval]] 1460.87 Elo×1.0, [[tau2-bench]] 86.2573%×1.0, [[tau3-banking]] 40.2062%×1.0, [[terminal-bench]] 57.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 80.6936%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | 70.3 | +1.35 | 실측 | [[ifbench]] 71.2245%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
