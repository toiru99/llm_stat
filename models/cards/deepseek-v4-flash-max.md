---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0622
output_speed_tps: 80.6120478609554
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 72.4, z: 1.24, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.64, r: 59.6, estimated: false }  # 코딩
  agentic: { s: 68.4, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 94.2, z: 1.82, r: 77.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1119 · 출력 $0.2338 · 혼합 $0.0622/1M · 80.6120478609554 t/s · TTFT 1.51733388598928s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.24 | 실측 | [[gpqa-diamond]] 89.3939%×0.4, [[humanitys-last-exam]] 34.8471%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 7.14286%×1.0, [[gpqa-diamond]] 89.3939%×1.0, [[humanitys-last-exam]] 34.8471%×1.0 |
| 코딩 | 59.6 | +0.64 | 실측 | [[scicode]] 45.2546%×1.0, [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 61.3 | +0.75 | 실측 | [[gdpval]] 1045.03 Elo×1.0, [[tau2-bench]] 95.0292%×1.0, [[tau3-banking]] 30.9278%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 74.3333%×1.0 |
| 지시 따르기 | 77.3 | +1.82 | 실측 | [[ifbench]] 79.1837%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
